export interface ColumnItemProps{
  name:string;
  href:string;
}

export interface FooterItemProps {
  name:string;
  desc?:string;
  columnItem: ColumnItemProps[]
}
