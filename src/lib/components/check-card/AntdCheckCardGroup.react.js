import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CheckCard } from '@ant-design/pro-card';
import 'antd/dist/antd.css';
import { parseChildrenToArray } from '../utils';

// 定义组合选择卡片组件AntdCheckCardGroup，api参数参考https://procomponents.ant.design/components/check-card
export default class AntdCheckCardGroup extends Component {

    constructor(props) {
        super(props)
        if (props.defaultValue) {
            props.setProps({ value: props.defaultValue })
        }
    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            multiple,
            bordered,
            value,
            defaultValue,
            disabled,
            size,
            setProps,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <CheckCard.Group id={id}
                className={className}
                style={style}
                multiple={multiple}
                bordered={bordered}
                value={value}
                defaultValue={defaultValue}
                disabled={disabled}
                size={size}
                onChange={(e) => setProps({ value: e })}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } >
                {children}
            </ CheckCard.Group>
        );
    }
}

// 定义参数或属性
AntdCheckCardGroup.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 传入内部嵌套的各个AntdCheckCard组件
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置是否允许多选，默认为false
    multiple: PropTypes.bool,

    // 设置是否显示边框，默认为true
    bordered: PropTypes.bool,

    // 设置/记录当前选项的选项值
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    // 设置默认选中的选项值
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    // 是否禁用当前整组选择卡片，默认为false
    disabled: PropTypes.bool,

    // 设置尺寸规格，可选的有'small'、'default'及'large'
    // 默认为'default'
    size: PropTypes.oneOf(['small', 'default', 'large']),

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdCheckCardGroup.defaultProps = {
}