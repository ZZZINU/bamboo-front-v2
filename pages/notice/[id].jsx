import { useRouter } from "next/router";
import styled from "styled-components";

export default function NoticeDetail() {

  const router = useRouter();
  const { id } = router.query;

  return (
    <>{id}상세</>
  )
}