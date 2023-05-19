import Datetime from "@components/Datetime";
import type { searchFrontmatter } from "@content/config";

export interface Props {
  href?: string;
  collection: string;
  frontmatter: searchFrontmatter;
  secHeading?: boolean;
}

export default function Card({
  href,
  collection,
  frontmatter,
  secHeading = true,
}: Props) {
  const { title, pubDatetime, description, image } = frontmatter;
  const cover =
    "https://ik.imagekit.io/2w5ub6jhu/IEA/" + collection + "/" + image;
  return (
    <li className="my-6 flex h-36 flex-row overflow-hidden">
      <img class="h-full w-36 shrink-0 object-cover" src={cover} />
      <div class="ml-2 text-xs sm:text-sm">
        <a
          href={href}
          className="inline-block font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          {secHeading ? (
            <h2 className="font-medium decoration-dashed hover:underline">
              {title}
            </h2>
          ) : (
            <h3 className="font-medium decoration-dashed hover:underline">
              {title}
            </h3>
          )}
        </a>
        {pubDatetime && <Datetime datetime={pubDatetime} />}
        <p>{description}</p>
      </div>
    </li>
  );
}
