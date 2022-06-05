import styles from './Documents.module.scss'

export const Documents = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/overview.md">🧑‍💻概要</a>
      </li>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/component-design.md">
          🧩コンポーネント設計
        </a>
      </li>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/directory-structure.md">
          📁ディレクトリ構成
        </a>
      </li>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/state-management.md">🗃️状態管理</a>
      </li>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/test.md">🧪テスト</a>
      </li>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/scaffolding.md">
          🐶ファイル生成(Scaffold)
        </a>
      </li>
    </ul>
  )
}
