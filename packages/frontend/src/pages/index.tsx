import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

// Change server address if necessary to point to your NestJS server.
const SERVER_ADDRESS = "http://localhost:4242";
export default function Home() {
  const [serverResponse, setServerResponse] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function getServerResponse() {
    setIsLoading(true);
    try {
      const response = await axios.get(`${SERVER_ADDRESS}/test/server`);
      setServerResponse(response.data);
    } catch (error) {
      setServerResponse(
        "have you started the server by running `nx dev server`?"
      );
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getServerResponse();
  }, []);
  return (
    <>
      <Head>
        <title>Your Project</title>
        <meta name="description" content="Generated by Overread" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Your project</h1>
          <p>
            This template is proudly created by{" "}
            <Link href="https://overread.dev">Overread</Link>. You can modify
            the text here and navigate to{" "}
            <Link href={"https://localhost:3000"}>https://localhost:3000</Link>{" "}
            see the changes
          </p>
          <h4>and</h4>
          {isLoading ? <p>Loading...</p> : <p>{serverResponse}</p>}
        </div>
      </div>
    </>
  );
}