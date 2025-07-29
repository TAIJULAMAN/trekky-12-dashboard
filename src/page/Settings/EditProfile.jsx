function EditProfile() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 rounded-lg shadow-sm">
        <h2 className="text-lg sm:text-xl lg:text-2xl text-[#0D0D0D] text-center font-bold mb-6">
          Edit Your Profile
        </h2>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm sm:text-base lg:text-lg text-[#0D0D0D] font-semibold">
              User Name
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full px-3 sm:px-4 py-3 border-2 border-[#6A6D76] rounded-lg outline-none focus:border-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3]/20 transition-all duration-200 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base"
              placeholder="Enter full name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm sm:text-base lg:text-lg text-[#0D0D0D] font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 sm:px-4 py-3 border-2 border-[#6A6D76] rounded-lg outline-none focus:border-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3]/20 transition-all duration-200 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base"
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm sm:text-base lg:text-lg text-[#0D0D0D] font-semibold">
              Contact No
            </label>
            <input
              type="tel"
              name="contactNo"
              className="w-full px-3 sm:px-4 py-3 border-2 border-[#6A6D76] rounded-lg outline-none focus:border-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3]/20 transition-all duration-200 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base"
              placeholder="Enter contact number"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm sm:text-base lg:text-lg text-[#0D0D0D] font-semibold">
              Address
            </label>
            <textarea
              name="address"
              rows="3"
              className="w-full px-3 sm:px-4 py-3 border-2 border-[#6A6D76] rounded-lg outline-none focus:border-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3]/20 transition-all duration-200 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base resize-none"
              placeholder="Enter your address"
              required
            />
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-[#F9B038] hover:bg-[#E8A532] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base shadow-sm hover:shadow-md"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
