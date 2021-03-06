import { ListItem } from './components/ListItem'
import styles from './Documents.module.scss'

export const Documents = () => {
  return (
    <ul className={styles.list}>
      <ListItem
        text="๐งโ๐ปๆฆ่ฆ"
        link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/overview.md"
      />
      <ListItem
        text="๐งฉใณใณใใผใใณใ่จญ่จ"
        link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/component-design.md"
      />
      <ListItem
        text="๐ใใฃใฌใฏใใชๆงๆ"
        link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/directory-structure.md"
      />
      <ListItem
        text="๐๏ธ็ถๆ็ฎก็"
        link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/state-management.md"
      />
      <ListItem text="๐งชใในใ" link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/test.md" />
      <ListItem
        text="๐ถใใกใคใซ็ๆ(Scaffold)"
        link="https://github.com/fumi-sagawa/next-simple-template/blob/main/docs/scaffolding.md"
      />
    </ul>
  )
}
