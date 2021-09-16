export default function AboutMe() {
  return (
    <>
      <h3>Hello, My name is Namju!</h3>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </>
  );
}
