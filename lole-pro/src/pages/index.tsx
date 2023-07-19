import styles from './index.less';
import Container from "@/components/Layout/Container/Container";

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Container edge='big'>
        hello
      </Container>
    </div>
  );
}
