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
    <div className="p-5 min-h-screen overflow-y-auto">
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className={`relative p-5 border rounded-lg mb-3 ${viewedNotifications.has(notification.id) ? 'bg-white' : 'bg-[#F9B038]'
              }`}
          >
            <button
              onClick={() => handleDismiss(notification.id)}
              className="absolute top-2 right-2 p-1 rounded-full bg-gray-100"
              aria-label="Dismiss notification"
            >
              <RxCross2 className="w-4 h-4 text-black" />
            </button>
            <div className="flex justify-between items-start w-full">
              <div className="flex gap-3 flex-1">
                <img
                  src={notification.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {notification.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {notification.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.date} • {notification.time}
                  </p>
                </div>
              </div>
              <div className="mr-10">
                <button
                  onClick={() => handleView(notification.id)}
                  className="bg-[#484848] hover:bg-[#484848]/90 text-white py-2 px-4 rounded-md flex items-center gap-2 text-sm"
                >
                  <FaEye />
                  View
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-10">No notifications.</p>
      )}
    </div>
  );
};

export default Notification;
