import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { UploadButton } from "../components/UploadButton";
import GoogleDriveStorage from "../components/GoogleDriveStorage";

const Home: NextPage = () => {
  const onChange = async (formData: FormData) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event: any) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };

    const response = await axios.post("/api/uploads", formData, config);

    console.log("response", response.data);
  };

  return (
    <>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex justify-center items-center gap-4">
        <UploadButton
          label="Local Upload"
          uploadFileName="theFiles"
          onChange={onChange}
        />
        <GoogleDriveStorage />
      </div>
    </>
  );
};

export default Home;
