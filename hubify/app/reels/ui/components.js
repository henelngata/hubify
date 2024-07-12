import styles from "./reels.module.css"
function Reel({ src }) {
  return (
    <section>
      <video className={styles.vid} src={src} autoPlay  controls></video>
    </section>
  );
}
function Reels() {
    return (
      <section className="height-80vh content-hidden">
        <Reel src="videos/vid.mp4" />
        <Reel src="videos/vid1.mp4" />
        <Reel src="videos/vid1.mp4" />
      </section>
    );
}

export { Reels };
