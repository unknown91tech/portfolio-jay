import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectImage`.
 */
export type ProjectImageProps = SliceComponentProps<Content.ProjectImageSlice>;

/**
 * Component for "ProjectImage" Slices.
 */
const ProjectImage = ({ slice }: ProjectImageProps): JSX.Element => {
  return (
    <PrismicNextImage field={slice.primary.image} imgixParams={{w: 600}}></PrismicNextImage>
  );
};

export default ProjectImage;
