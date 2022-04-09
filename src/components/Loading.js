import './Loading.css';


export const Loading = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="header-img skeleton"></div>
        <div className="title">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </div>
      <div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
      </div>
    </div>
  )
}
