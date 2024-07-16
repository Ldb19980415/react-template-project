import { AntdTableResult } from "ahooks/lib/useAntdTable/types";
import { Table, Card } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";
import { CSSProperties, FC, memo } from "react";
import "./style.less";

interface Props {
  columns: ColumnsType<any>;
  tableProps: AntdTableResult<any, any>["tableProps"];
  rowKey?: string;
  otherTableProps?: TableProps;
  showTableCard?: boolean;
  style?: CSSProperties;
}

export const TableConfig: FC<Props> = memo(
  ({
    columns,
    tableProps,
    rowKey = "id",
    showTableCard = true,
    otherTableProps = {},
    style,
  }) => {
    const tableRender = (
      <Table
        columns={columns}
        bordered
        rowKey={rowKey}
        {...tableProps}
        {...otherTableProps}
        pagination={{
          ...tableProps.pagination,
          showQuickJumper: true,
          showSizeChanger: true,
          showTotal: (total) => `共${total}条`,
          hideOnSinglePage: true,
        }}
        loading={false}
      />
    );

    return showTableCard ? (
      <Card className="table-config-card-wrap" style={style}>
        {tableRender}
      </Card>
    ) : (
      tableRender
    );
  }
);
