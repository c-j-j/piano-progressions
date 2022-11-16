import { Piano } from "../../../components/Piano";
import { Progression } from "../../../components/constants/progressions";

export default function Page({ params }: { params: { slug: Progression } }) {
  return (
    <div className="h-screen flex items-center justify-center">
      <Piano progression={params.slug} />
    </div>
  );
}
