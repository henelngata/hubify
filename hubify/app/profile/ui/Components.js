function Avatar({ src, width, height }) {
  return (
    <section>
      <Image
        src={src}
        width={width}
        height={height}
        alt="An avatar profile pic"
      />
    </section>
  );
}

function ProfileMeta({ number, text }) {
    return
    <section>
        <b>number</b>
        <p>text</p>
  </section>;
}

function ProfileBio({name, bio}) {
    return (
        <section>
            <b>name</b>
            <p>bio</p>
        </section>
    )
}