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
      viewId: "PDFS",
      token:
        "ya29.A0ARrdaM99uR8QclkDZX_bIA3oysDBIevUkxVmhR6NwNR0CGcXsn8aIzJMmwxOXS7fqOKVqKmuFLstvqa0mApFHdZWn-WwCtFrgVDF88ztX2HPFR7sm9JqazxEwsP7t6msUoYtObFhBhXVMM9_Zn1md6Fk3BD-", // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: false,
      disableDefaultView: true,
      supportDrives: false,
      multiselect: false,
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
