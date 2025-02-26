import './eventSkeleton.scss';

export function EventSkeleton() {
  return (
    <div className="projects-skeleton">
      <div className="text-skeleton">
        <div className="title-skeleton"></div>
        <div className="description-skeleton"></div>
        <div className="other-info-skeleton"></div>
      </div>
      <div className="images-skeleton">
        <div className="image-skeleton"></div>
        <div className="image-skeleton"></div>
        <div className="image-skeleton"></div>
      </div>
    </div>
  );
}
