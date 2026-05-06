"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Smartphone, CheckCircle2, FileText, Upload, User, Clock, AlertCircle } from "lucide-react";

const successRateData = [
  { name: '30', value: 20 },
  { name: '20', value: 30 },
  { name: '40', value: 45 },
  { name: '60', value: 40 },
  { name: '90', value: 75 },
  { name: '100', value: 85 },
];

const statusDistributionData = [
  { name: 'Verified', value: 65 },
  { name: 'Pending', value: 25 },
  { name: 'Failed', value: 10 },
];

const STATUS_COLORS = ['#3b82f6', '#f59e0b', '#ef4444'];

const verificationHistory = [
  { date: "2023-10-27", user: "+1 (555) 123-4567", type: "Phone & ID", status: "Pending", action: "View Details" },
  { date: "2023-10-27", user: "+1 (555) 123-4567", type: "Phone & ID", status: "Pending", action: "View Details" },
  { date: "2023-10-27", user: "+1 (555) 123-4567", type: "Phone & ID", status: "Pending", action: "View Details" },
];

export default function IdentityDashboard() {
  return (
    <div className="p-6 space-y-6 h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Identity Verification & User Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Left Column - Scanning & Verification */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Identity Scanning & Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Phone Verification */}
              <div className="space-y-2 border rounded-lg p-4 bg-background">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Phone Number Verification</span>
                  </div>
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-200">Active</Badge>
                </div>
                <Progress value={100} className="h-2 bg-emerald-100 [&>div]:bg-emerald-500" />
              </div>

              {/* Document Scan */}
              <div className="space-y-2 border rounded-lg p-4 bg-background">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">Document Scan (ID Card/Driver's License)</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Processing - 65% Complete</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>

              {/* Upload Action */}
              <div className="border border-dashed rounded-lg p-6 bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-background p-2 rounded-full shadow-sm">
                    <Upload className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium">Upload ID Document</h3>
                    <p className="text-sm text-muted-foreground">Document Scan (ID Card/Driver's License)</p>
                  </div>
                </div>
                <Button>Upload ID Document</Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            {/* User Profile */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">User Profile Information</CardTitle>
                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-200">Verifying Profile</Badge>
              </CardHeader>
              <CardContent className="mt-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-muted-foreground">Full Name:</span>
                    <span>[Scanning...]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-muted-foreground">Date of Birth:</span>
                    <span>[Scanning...]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-muted-foreground">Address:</span>
                    <span>[Scanning...]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-muted-foreground">National ID:</span>
                    <span>[Scanning...]</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Rate */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Verification Success Rate</CardTitle>
              </CardHeader>
              <CardContent className="h-[150px] p-0 px-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={successRateData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.5} />
                    <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis fontSize={10} tickLine={false} axisLine={false} />
                    <RechartsTooltip />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} fill="url(#colorUv)" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Verification History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Date</TableHead>
                    <TableHead className="text-xs">User ID/Phone</TableHead>
                    <TableHead className="text-xs">Verification Type</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {verificationHistory.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-xs py-2">{item.date}</TableCell>
                      <TableCell className="text-xs py-2">{item.user}</TableCell>
                      <TableCell className="text-xs py-2">{item.type}</TableCell>
                      <TableCell className="text-xs py-2">
                        <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200">
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs py-2 text-primary cursor-pointer hover:underline">
                        {item.action}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Scan Results */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Scan Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Phone Result */}
              <div className="rounded-lg p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                <h4 className="font-medium text-sm mb-2">Phone Number Scan</h4>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400">
                    <Smartphone className="h-4 w-4" />
                    <span className="font-medium">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex space-x-1 text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-xs text-emerald-600 dark:text-emerald-500 font-medium">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Verified</span>
                </div>
              </div>

              {/* ID Result */}
              <div className="rounded-lg p-4 bg-slate-50 dark:bg-slate-900 border">
                <h4 className="font-medium text-sm mb-3">ID Document Scan</h4>
                <div className="flex items-start space-x-3">
                  <div className="bg-background p-2 rounded shadow-sm border mt-1">
                    <FileText className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Analyzing Document...</div>
                    <div className="text-xs text-muted-foreground">Extracting Details...</div>
                  </div>
                </div>
              </div>

              {/* Face Match */}
              <div className="rounded-lg p-4 bg-background border">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-sm">Face Match</h4>
                  <span className="text-xs text-muted-foreground">Comparing...</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="border-2 border-dashed rounded-lg p-4 flex-1 flex justify-center items-center">
                     <User className="h-10 w-10 text-muted-foreground opacity-50" />
                  </div>
                  <div className="text-xs text-muted-foreground w-24 text-center">
                    User's photo from document
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">User Status Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {statusDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={STATUS_COLORS[index % STATUS_COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <Legend verticalAlign="bottom" height={36} iconType="square" wrapperStyle={{ fontSize: '12px' }}/>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
