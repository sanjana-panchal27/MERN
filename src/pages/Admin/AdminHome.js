import React from 'react';
import { motion } from 'framer-motion';
import './AdminHome.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { FaUserGraduate, FaBuilding, FaCheckCircle, FaChartLine } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AdminHome = () => {
  const performanceData = [
    { month: 'Jan', students: 5, companies: 3 },
    { month: 'Feb', students: 8, companies: 4 },
    { month: 'Mar', students: 12, companies: 6 },
    { month: 'Apr', students: 15, companies: 8 },
    { month: 'May', students: 18, companies: 10 },
    { month: 'Jun', students: 20, companies: 12 },
  ];

  return (
    <motion.div 
      className="modern-admin-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="admin-header">
        <motion.h1 variants={itemVariants} className="admin-title">
          Admin Dashboard
        </motion.h1>
        <motion.p variants={itemVariants} className="admin-subtitle">
          Overview of platform activity and placement metrics.
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="a-stats-grid">
        <motion.div whileHover={{ scale: 1.05 }} className="a-stat-card blue-glass">
          <div className="stat-icon-wrapper"><FaUserGraduate /></div>
          <div>
            <h3>Total Students</h3>
            <p className="a-stat-value">51</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="a-stat-card yellow-glass">
          <div className="stat-icon-wrapper"><FaBuilding /></div>
          <div>
            <h3>Total Companies</h3>
            <p className="a-stat-value">50</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="a-stat-card green-glass">
          <div className="stat-icon-wrapper"><FaCheckCircle /></div>
          <div>
            <h3>Placed Students</h3>
            <p className="a-stat-value">11</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="a-stat-card purple-glass">
          <div className="stat-icon-wrapper"><FaChartLine /></div>
          <div>
            <h3>Placement Rate</h3>
            <p className="a-stat-value">3%</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Performance Charts */}
      <motion.div variants={itemVariants} className="charts-container">
        {/* Bar Chart */}
        <motion.div whileHover={{ y: -5 }} className="modern-chart-box">
          <div className="chart-header">
            <h3>Student & Company Growth</h3>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                  cursor={{fill: 'rgba(241, 245, 249, 0.5)'}}
                />
                <Bar dataKey="students" fill="#3b82f6" name="Students" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar dataKey="companies" fill="#f59e0b" name="Companies" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Line Chart */}
        <motion.div whileHover={{ y: -5 }} className="modern-chart-box">
          <div className="chart-header">
            <h3>Placement Trend</h3>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#10b981"
                  strokeWidth={4}
                  dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8 }}
                  name="Placed Students"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AdminHome;
