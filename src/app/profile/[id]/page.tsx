export default function profile({ params }: any) {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <h1 className="text-black">Profile</h1>
      <hr />
      <p>
        Profile Page:
        <span className="text-orange-600 bg-black p-2">{params.id}</span>
      </p>
    </div>
  );
}
