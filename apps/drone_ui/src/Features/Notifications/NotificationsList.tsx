import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  timestamp: string;
  isRead: boolean;
  source: 'mission' | 'drone' | 'system' | 'ai';
}

export const NotificationsList = ({ isWidget = false }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [typeFilter, setTypeFilter] = useState<Notification['type'] | 'all'>('all');

  // Mock notifications - replace with actual data
  const notifications: Notification[] = [
    {
      id: '1',
      title: 'Mission Alpha Started',
      message: 'Surveillance mission in Zone B has been initiated successfully.',
      type: 'success',
      timestamp: '2024-03-21T10:30:00Z',
      isRead: false,
      source: 'mission'
    },
    {
      id: '2',
      title: 'Low Battery Warning',
      message: 'Drone Beta (ID: 2) battery level below 20%.',
      type: 'warning',
      timestamp: '2024-03-21T10:25:00Z',
      isRead: true,
      source: 'drone'
    },
    // Add more mock notifications...
  ];

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'info': return '📋';
      case 'warning': return '⚠️';
      case 'success': return '✅';
      case 'error': return '❌';
      default: return '📢';
    }
  };

  const getSourceIcon = (source: Notification['source']) => {
    switch (source) {
      case 'mission': return '🎯';
      case 'drone': return '🚁';
      case 'system': return '⚙️';
      case 'ai': return '🤖';
      default: return '📢';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread' && notification.isRead) return false;
    if (typeFilter !== 'all' && notification.type !== typeFilter) return false;
    return true;
  });

  const NotificationList = () => (
    <div className="space-y-4">
      {filteredNotifications.map((notification) => (
        <div 
          key={notification.id}
          className={`alert ${notification.isRead ? 'opacity-70' : ''} ${
            notification.type === 'success' ? 'alert-success' :
            notification.type === 'warning' ? 'alert-warning' :
            notification.type === 'error' ? 'alert-error' :
            'alert-info'
          }`}
        >
          <div className="flex justify-between w-full">
            <div>
              <div className="flex items-center gap-2">
                <span>{getNotificationIcon(notification.type)}</span>
                <span className="font-bold">{notification.title}</span>
                {!notification.isRead && (
                  <span className="badge badge-sm">New</span>
                )}
              </div>
              <p className="text-sm mt-1">{notification.message}</p>
            </div>
            <div className="flex flex-col items-end justify-between">
              <span className="text-xs opacity-70">
                {new Date(notification.timestamp).toLocaleString()}
              </span>
              <span className="text-xs">
                {getSourceIcon(notification.source)} {notification.source}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (isWidget) {
    return (
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <span className="indicator-item badge badge-primary badge-xs">
              {notifications.filter(n => !n.isRead).length}
            </span>
            🔔
          </div>
        </div>
        <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-96 p-2 shadow bg-base-100">
          <div className="card-body">
            <h3 className="card-title text-lg">Notifications</h3>
            <NotificationList />
            <div className="card-actions justify-end">
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => navigate('/notifications')}
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Notification Center</h2>
        <div className="flex gap-2">
          <select 
            className="select select-bordered select-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'unread')}
          >
            <option value="all">All</option>
            <option value="unread">Unread</option>
          </select>
          <select 
            className="select select-bordered select-sm"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as Notification['type'] | 'all')}
          >
            <option value="all">All Types</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="success">Success</option>
            <option value="error">Error</option>
          </select>
          <button className="btn btn-primary btn-sm">
            Mark All as Read
          </button>
        </div>
      </div>
      <NotificationList />
    </div>
  );
};