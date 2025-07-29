import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaEye } from "react-icons/fa";

const Notification = () => {
  const [viewedNotifications, setViewedNotifications] = useState(new Set());
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "user_joined",
      title: "New User Joined",
      description: "Emily Johnson has joined the platform.",
      date: "2025-04-24",
      time: "09:20 AM",
      avatar: "https://avatar.iran.liara.run/public/11",
    },
    {
      id: "2",
      type: "listing_request",
      title: "New Listing Request",
      description:
        'Michael Brown submitted a new listing: "Downtown Event Space"',
      date: "2024-12-14",
      time: "08:00 AM",
      avatar: "https://avatar.iran.liara.run/public/12",
    },
    {
      id: "3",
      type: "listing_request",
      title: "New Listing Request",
      description: 'Anna Lee submitted a new listing: "Cozy Book Café"',
      date: "2024-12-14",
      time: "08:00 AM",
      avatar: "https://avatar.iran.liara.run/public/13",
    },
    {
      id: "4",
      type: "user_joined",
      title: "New User Joined",
      description: "David Smith has joined the platform.",
      date: "2025-04-25",
      time: "10:15 AM",
      avatar: "https://avatar.iran.liara.run/public/14",
    },
    {
      id: "5",
      type: "listing_request",
      title: "New Listing Request",
      description:
        'Samantha White submitted a new listing: "Luxury Penthouse Suite"',
      date: "2024-12-15",
      time: "02:45 PM",
      avatar: "https://avatar.iran.liara.run/public/15",
    },
    {
      id: "6",
      type: "user_joined",
      title: "New User Joined",
      description: "Chris Evans has joined the platform.",
      date: "2025-04-26",
      time: "03:00 PM",
      avatar: "https://avatar.iran.liara.run/public/16",
    },
    {
      id: "7",
      type: "listing_request",
      title: "New Listing Request",
      description: 'Laura Green submitted a new listing: "Coastal Beach House"',
      date: "2024-12-16",
      time: "09:30 AM",
      avatar: "https://avatar.iran.liara.run/public/17",
    },
    {
      id: "8",
      type: "user_joined",
      title: "New User Joined",
      description: "James Williams has joined the platform.",
      date: "2025-04-27",
      time: "11:20 AM",
      avatar: "https://avatar.iran.liara.run/public/18",
    },
    {
      id: "9",
      type: "listing_request",
      title: "New Listing Request",
      description:
        'Sophia Brown submitted a new listing: "Downtown Office Space"',
      date: "2024-12-17",
      time: "04:00 PM",
      avatar: "https://avatar.iran.liara.run/public/19",
    },
    {
      id: "10",
      type: "user_joined",
      title: "New User Joined",
      description: "Olivia Miller has joined the platform.",
      date: "2025-04-28",
      time: "06:10 PM",
      avatar: "https://avatar.iran.liara.run/public/20",
    },
  ]);

  const handleDismiss = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleView = (id) => {
    setViewedNotifications((prev) => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="p-3 sm:p-4 md:p-5 min-h-screen overflow-y-auto">
      <div className="container mx-auto">
        <div className="mb-5">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Notifications
          </h1>
        </div>

        {notifications.length > 0 ? (
          <div className="space-y-3 md:space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`relative p-4 md:p-5 bg-[#F9B038] border rounded-xl shadow-sm transition-all duration-200 hover:shadow-md ${viewedNotifications.has(notification.id)
                  ? 'bg-white border-gray-200'
                  : 'bg-gradient-to-r from-[#F9B038]/10 to-[#F9B038]/5 border-[#F9B038]/30 shadow-md'
                  }`}
              >
                <button
                  onClick={() => handleDismiss(notification.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 z-10"
                  aria-label="Dismiss notification"
                >
                  <RxCross2 className="w-4 h-4 text-gray-600" />
                </button>

                <div className="flex flex-col sm:flex-row sm:items-start gap-4 pr-8">
                  <div className="flex gap-3 flex-1">
                    <div className="relative">
                      <img
                        src={notification.avatar}
                        alt="Avatar"
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                          {notification.title}
                        </h3>
                      </div>

                      <p className="text-sm md:text-base text-gray-700 mb-3 leading-relaxed">
                        {notification.description}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <p className="text-xs md:text-sm text-gray-500 flex items-center gap-2">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          {notification.date} • {notification.time}
                        </p>

                        <button
                          onClick={() => handleView(notification.id)}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${viewedNotifications.has(notification.id)
                            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            : 'bg-[#484848] text-white hover:bg-[#484848]/90 shadow-sm hover:shadow-md'
                            }`}
                        >
                          <FaEye className="w-4 h-4" />
                          {viewedNotifications.has(notification.id) ? 'Viewed' : 'View'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <RxCross2 className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg mb-2">No notifications</p>
            <p className="text-gray-400 text-sm">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;