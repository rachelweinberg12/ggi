import { SUBSTACK_URL } from "@/utils/constants";

export function SubstackSubscribe() {
  return <iframe src={`${SUBSTACK_URL}/embed`} width="350" height="150" />;
}
