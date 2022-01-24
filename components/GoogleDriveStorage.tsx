import { useEffect } from "react";
import { MdAttachFile } from "react-icons/md";
import useDrivePicker from "react-google-drive-picker";

function GoogleDriveStorage() {
  const [openPicker, data, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "583381385603-9mrtnhcpohqk85bp1qfoqbd08eomo9lf.apps.googleusercontent.com",
      developerKey: "AIzaSyDKk2CiM-YeTJdFF-CPNi-jHru3HbQHd-A",
      viewId: "DOCS",
      token:
        "ya29.A0ARrdaM8IpWIVmD_VmK7Ke6IGl-kMoDfpRUxxzufac-Kzgx66P953NSfKRPBzooiiLkxs0CjrPtTuHm3DxBHSzVhXUWUs52Y6PXwglZLEy7snR7xpV5f2_LS2oiHHM61XyamCtP6hFPtEFy1s__VwwMMp7RmV", // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: false,
      disableDefaultView: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
    });
  };

  useEffect(() => {
    // do anything with the selected/uploaded files
    if (data) {
      data.docs.map((i) => console.log(i));
    }
  }, [data]);

  return (
    <div>
      <button
        className="bg-gray-300 rounded-md p-2 flex items-center font-bold text-2xl"
        onClick={() => handleOpenPicker()}
      >
        <MdAttachFile />
        Google Drive Upload
      </button>
    </div>
  );
}

export default GoogleDriveStorage;
