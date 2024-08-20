"use client";
import { supabase } from "@/supabase/supabase";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

async function fetchInvestorSubmissions() {
  const { data, error } = await supabase
    .from("investor_submissions")
    .select("*");

  if (error) {
    console.error("Error fetching data:", error);
    return { error: error.message };
  }

  return { data };
}

export default function Page({}: Props) {
  const [submissions, setSubmissions] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    async function getData() {
      const result = await fetchInvestorSubmissions();
      setSubmissions(result);
      if (result.data) {
        setRowCount(result.data.length);
      }
      setLoading(false);
    }
    getData();

    const updateChannel = supabase
      .channel("custom-update-channel")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "investor_submissions" },
        (payload) => {
          console.log("Change received!", payload);
          getData(); // Fetch data again on update
        }
      )
      .subscribe();

    const insertChannel = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "investor_submissions" },
        (payload) => {
          console.log("Change received!", payload);
          getData(); // Fetch data again on insert
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(updateChannel);
      supabase.removeChannel(insertChannel);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="fillscreen">
      <Wrapper className="py-[10dvh]">
        <InnerWrap className="min-h-[30dvh]">
          <div className="border rounded-xl shadow-md border-slate-200 flex w-full p-4">
            {submissions?.error ? (
              <pre>{JSON.stringify({ error: submissions.error }, null, 2)}</pre>
            ) : (
              <Table>
                <TableCaption>
                  A list of investor submissions. Total rows: {rowCount}
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Contact Number</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Updated At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.data.map((submission: any) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium">
                        {submission.id}
                      </TableCell>
                      <TableCell>{submission.name}</TableCell>
                      <TableCell>{submission.email}</TableCell>
                      <TableCell>{submission.location}</TableCell>
                      <TableCell>{submission.contactNumber}</TableCell>
                      <TableCell>{submission.created_at}</TableCell>
                      <TableCell>{submission.updated_at}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </InnerWrap>
      </Wrapper>
    </main>
  );
}
