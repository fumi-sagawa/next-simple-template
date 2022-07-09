import { ListItem } from './components/ListItem'
import styles from './Documents.module.scss'

export const Documents = () => {
  return (
    <ul className={styles.list}>
      <ListItem
        text="🧑‍💻概要"
        link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/overview.md"
      />
      <ListItem
        text="🧩コンポーネント設計"
        link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/component-design.md"
      />
      <ListItem
        text="📁ディレクトリ構成"
        link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/directory-structure.md"
      />
      <ListItem
        text="🗃️状態管理"
        link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/state-management.md"
      />
      <ListItem text="🧪テスト" link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/test.md" />
      <ListItem
        text="🐶ファイル生成(Scaffold)"
        link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/scaffolding.md"
      />
    </ul>
  )
}
