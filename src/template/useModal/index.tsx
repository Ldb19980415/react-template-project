import { Modal } from 'antd';
import { useBoolean } from 'ahooks';
import { forwardRef, useImperativeHandle } from 'react';
import { ModalRefType } from '@/utils/itf';

export interface RowDetailModalParams {
    id: number;
}
interface Props {}
export const RowDetailModal = forwardRef<
    ModalRefType<RowDetailModalParams>,
    Props
>((props, ref) => {
    const [visible, { setTrue, setFalse }] = useBoolean(false);
    const openModal = (values: RowDetailModalParams) => {
        const { id } = values;
        // todo
        setTrue();
    };
    useImperativeHandle(ref, () => ({
        openModal,
    }));

    return (
        <Modal
            open={visible}
            onOk={() => {
                //todo
                setFalse();
            }}
            onCancel={() => {
                // todo
                setFalse();
            }}
        >
            modal content
        </Modal>
    );
});

/**
 * use it
 *
 *
 * const modalRef = useRef<ModalRefType<RowDetailModalParams>>(null);
 *
 * and bind modalRef to component
 *
 *
 * modalRef.current?.openModal({id: 123})
 */