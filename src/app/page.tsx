import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, UserCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-full items-center justify-center p-6 h-full">
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full">
        <Card className="flex flex-col">
          <CardHeader>
            <ShieldAlert className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Ad Fraud Detection</CardTitle>
            <CardDescription>
              Monitor ad fraud rates, view traffic analysis, and track recent fraudulent incidents across campaigns.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-end">
            <Button asChild className="w-full">
              <Link href="/ad-fraud">Open Dashboard</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <UserCheck className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Identity Verification</CardTitle>
            <CardDescription>
              Manage user verification, review document scans, and check success rates for identity processes.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-end">
            <Button asChild className="w-full">
              <Link href="/identity">Open Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
