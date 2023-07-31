import Load from 'react-loading';

export default function Loading() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap3 p-3 bgcolor-dark">
      <Load type="spokes" />
      <span>Please wait...</span>
    </div>
  );
}
