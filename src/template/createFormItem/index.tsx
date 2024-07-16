import { Input } from 'antd';
import { FC, memo, useMemo, useState } from 'react';

interface Props<T = any> {
    value?: T;
    onChange?: (v: T) => void;
}

export const Component: FC<Props<string>> = memo((props) => {
    const { onChange } = props;
    const [innerValue, setInnerValue] = useState<string>();
    const value = useMemo(() => {
        return 'value' in props ? props.value : innerValue;
    }, [props.value, innerValue]);
    return (
        <div>
            {value}
            <Input
                value={value}
                onChange={(e) => {
                    const resV = e.target.value;
                    onChange?.(resV);
                    setInnerValue(resV);
                }}
            />
        </div>
    );
});