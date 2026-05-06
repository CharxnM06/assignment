"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from "recharts";

const trendData = [
  { name: 'Oct 3', value: 15, value2: 10 },
  { name: 'Oct 5', value: 25, value2: 20 },
  { name: 'Oct 7', value: 12, value2: 30 },
  { name: 'Oct 9', value: 30, value2: 15 },
  { name: 'Oct 11', value: 20, value2: 40 },
  { name: 'Oct 13', value: 45, value2: 25 },
  { name: 'Oct 15', value: 22, value2: 18 },
  { name: 'Oct 17', value: 38, value2: 45 },
  { name: 'Oct 19', value: 18, value2: 15 },
  { name: 'Oct 21', value: 48, value2: 25 },
  { name: 'Oct 23', value: 25, value2: 10 },
  { name: 'Oct 25', value: 28, value2: 35 },
];

const distributionData = [
  { name: 'Bots', value: 35 },
  { name: 'Click Farm', value: 28 },
  { name: 'Geo', value: 18 },
  { name: 'Data Center', value: 14 },
  { name: 'Hidden Ads', value: 5 },
];

const sourcesData = [
  { name: 'Source A', value: 28 },
  { name: 'Source B', value: 24 },
  { name: 'Source C', value: 19 },
  { name: 'Source D', value: 16 },
  { name: 'Source E', value: 13 },
];

const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#f97316', '#ef4444'];

const recentIncidents = [
  { timestamp: "Oct 25 11:32:01", campaign: "C_7812", eventId: "E_98234", sourceId: "S_451 (DSP X)", type: "Click", reason: "High IVT", location: "NY, USA", ip: "192.0.2.14", action: "Blocked" },
  { timestamp: "Oct 25 11:32:01", campaign: "C_7812", eventId: "E_98234", sourceId: "S_451 (DSP X)", type: "Click", reason: "High IVT", location: "NY, USA", ip: "192.0.2.14", action: "Blocked" },
  { timestamp: "Oct 25 11:32:01", campaign: "C_7812", eventId: "E_98234", sourceId: "S_451 (DSP X)", type: "Click", reason: "High IVT", location: "NY, USA", ip: "192.0.2.14", action: "Blocked" },
  { timestamp: "Oct 25 11:32:01", campaign: "C_7812", eventId: "E_98234", sourceId: "S_451 (DSP X)", type: "Click", reason: "High IVT", location: "NY, USA", ip: "192.0.2.14", action: "Blocked" },
  { timestamp: "Oct 25 11:32:01", campaign: "C_7812", eventId: "E_98234", sourceId: "S_451 (DSP X)", type: "Click", reason: "High IVT", location: "NY, USA", ip: "192.0.2.14", action: "Blocked" },
];

export default function AdFraudDashboard() {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-6 h-full">
      {/* Filters Sidebar */}
      <div className="w-full md:w-64 space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">FILTERS</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Date Range</Label>
              <Select defaultValue="this-month">
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-month">This Month (Oct 1 - Oct 25)</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="ytd">Year to Date</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Campaigns</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select campaign" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Campaigns</SelectItem>
                  <SelectItem value="holiday">Holiday Boost</SelectItem>
                  <SelectItem value="app">App Installs</SelectItem>
                  <SelectItem value="web">Web Traffic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Traffic Sources</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="dsps">DSPs</SelectItem>
                  <SelectItem value="networks">Ad Networks</SelectItem>
                  <SelectItem value="direct">Direct</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Fraud Types</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="ivt">IVT</SelectItem>
                  <SelectItem value="bots">Bots</SelectItem>
                  <SelectItem value="click">Click Farming</SelectItem>
                  <SelectItem value="geo">Geo Fraud</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Region</Label>
              <Select defaultValue="global">
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="global">Global</SelectItem>
                  <SelectItem value="na">North America</SelectItem>
                  <SelectItem value="eu">Europe</SelectItem>
                  <SelectItem value="apac">APAC</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-4">Ad Fraud Detection Dashboard</h1>
          
          <div className="grid gap-4 md:grid-cols-5">
            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Overall Fraud Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">8.4%</div>
                <p className="text-xs text-destructive flex items-center mt-1">
                  -0.5% <span className="text-muted-foreground ml-1">from last month</span>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Traffic</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,245,678</div>
                <p className="text-xs text-muted-foreground mt-1">clicks</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Valid Traffic</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-500">1,141,010</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Invalid Traffic (IVT)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-500">104,668</div>
                <p className="text-xs text-muted-foreground mt-1">clicks</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Revenue Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-500">$3,240</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="col-span-1 md:col-span-1">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Ad Fraud Trend (Daily)</CardTitle>
            </CardHeader>
            <CardContent className="px-2 h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis fontSize={10} tickLine={false} axisLine={false} />
                  <RechartsTooltip />
                  <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="value2" stroke="#ef4444" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-1">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Fraud Distribution by Type</CardTitle>
            </CardHeader>
            <CardContent className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={distributionData}>
                  <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis fontSize={10} tickLine={false} axisLine={false} />
                  <RechartsTooltip />
                  <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]}>
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-1">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Fraud Hotspots by Country</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-[200px] relative">
              <div className="text-xs text-muted-foreground absolute z-10">World Map Visualization</div>
              {/* Placeholder for map */}
              <div className="w-full h-full bg-slate-800/20 rounded-md overflow-hidden relative opacity-50 flex items-center justify-center">
                 🌍
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="col-span-1 md:col-span-1">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Top 5 Fraudulent Sources</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourcesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {sourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px' }}/>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Recent Fraud Incidents</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Timestamp</TableHead>
                    <TableHead className="text-xs">Campaign ID</TableHead>
                    <TableHead className="text-xs">Event ID</TableHead>
                    <TableHead className="text-xs">Source ID</TableHead>
                    <TableHead className="text-xs">Traffic Type</TableHead>
                    <TableHead className="text-xs">Fraud Reason</TableHead>
                    <TableHead className="text-xs">Location</TableHead>
                    <TableHead className="text-xs">IP Address</TableHead>
                    <TableHead className="text-xs">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentIncidents.map((incident, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-xs py-2">{incident.timestamp}</TableCell>
                      <TableCell className="text-xs py-2">{incident.campaign}</TableCell>
                      <TableCell className="text-xs py-2">{incident.eventId}</TableCell>
                      <TableCell className="text-xs py-2">{incident.sourceId}</TableCell>
                      <TableCell className="text-xs py-2">{incident.type}</TableCell>
                      <TableCell className="text-xs py-2">{incident.reason}</TableCell>
                      <TableCell className="text-xs py-2">{incident.location}</TableCell>
                      <TableCell className="text-xs py-2">{incident.ip}</TableCell>
                      <TableCell className="text-xs py-2 text-destructive">{incident.action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
