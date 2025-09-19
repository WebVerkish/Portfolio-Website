import React from 'react';
import {
  Mail,
  Percent,
  MousePointerClick,
  Reply,
  TrendingUp,
} from 'lucide-react';

import './ColdEmailStats.css'; // Import the external, theme-compatible CSS

const emailStats = [
  { label: 'Emails Sent', value: '3,200', icon: Mail },
  { label: 'Open Rate', value: '52%', icon: Percent },
  { label: 'Click Rate', value: '12%', icon: MousePointerClick },
  { label: 'Replies', value: '170', icon: Reply },
  { label: 'Conversions', value: '25', icon: TrendingUp },
];

const teamStats = [
  { name: 'John Doe', sent: 1200, opens: '65%', replies: 45, conversions: 10 },
  { name: 'Priya Sharma', sent: 1000, opens: '58%', replies: 32, conversions: 7 },
];

const followUps = [
  { email: 'ceo@startup.com', daysSince: 3, followUp: 1, action: 'Send today' },
  { email: 'client@designhub.com', daysSince: 7, followUp: 2, action: 'Final reminder' },
];

const ColdEmailStats = () => {
  return (
    <div className="cold-email-container">
      <h2>📧 Cold Email Performance</h2>

      {/* Stats cards */}
      <div className="stats-grid">
        {emailStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <stat.icon size={28} />
            <div>
              <p className="label">{stat.label}</p>
              <p className="value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team Performance */}
      <div className="section">
        <h3>👥 Team Performance</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Member</th>
                <th>Sent</th>
                <th>Open Rate</th>
                <th>Replies</th>
                <th>Conversions</th>
              </tr>
            </thead>
            <tbody>
              {teamStats.map((member, i) => (
                <tr key={i}>
                  <td>{member.name}</td>
                  <td>{member.sent}</td>
                  <td>{member.opens}</td>
                  <td>{member.replies}</td>
                  <td>{member.conversions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Follow-Up Manager */}
      <div className="section">
        <h3>📅 Follow-Up Manager</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Days Since Contact</th>
                <th>Follow-Up #</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {followUps.map((item, i) => (
                <tr key={i}>
                  <td>{item.email}</td>
                  <td>{item.daysSince}</td>
                  <td>{item.followUp}</td>
                  <td>{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ColdEmailStats;
