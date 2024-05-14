import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTimeRangePicker = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdTimeRangePicker.react'));

const AntdTimeRangePicker = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTimeRangePicker {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdTimeRangePicker.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    /**
     * 设置弹框菜单css类名
     */
    popupClassName: PropTypes.string,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    /**
     * 用于在基于AntdForm的表单值自动搜集功能中，充当当前表单项的字段名
     * 缺省时会以id作为字段名
     */
    name: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置小时选项间隔，默认为1
    hourStep: PropTypes.number,

    // 设置分钟选项间隔，默认为1
    minuteStep: PropTypes.number,

    // 设置秒选项间隔，默认为1
    secondStep: PropTypes.number,

    // 设置时间展示的格式，默认为'hh:mm:ss'
    format: PropTypes.string,

    // 设置是否使用12小时制，当设置为true时，format参数默认为'h:mm:ss a'
    use12Hours: PropTypes.bool,

    // 设置是否显示输入框内容清除按钮，默认为true即不显示
    allowClear: PropTypes.bool,

    // 用于设置是否自动获取焦点，默认为false
    autoFocus: PropTypes.bool,

    // 空白输入下输入框的填充说明文字
    placeholder: PropTypes.arrayOf(PropTypes.string),

    // 设置时间选择面板的展开方向，可选的有'bottomLeft'、'bottomRight'、'topLeft'、'topRight'
    // 默认为'bottomLeft'
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    // 设置输入框是否被禁用
    disabled: PropTypes.arrayOf(PropTypes.bool),

    // 已选择的范围开始时间
    value: PropTypes.arrayOf(PropTypes.string),

    // 设置默认已选择的时间范围
    defaultValue: PropTypes.arrayOf(PropTypes.string),

    /**
     * 设置是否渲染边框，设置为true时等价于variant='outlined'
     * 默认：true
     */
    bordered: PropTypes.bool,

    /**
     * 设置形态变体类型，可选的有'outlined'、'borderless'、'filled'
     * 其中'outlined'等价于bordered=true，优先级高于bordered
     */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    // 设置尺寸大小，可选的有'small'、'middle'及'large'
    size: PropTypes.oneOf([
        'small', 'middle', 'large'
    ]),

    // 用于设置或监听当前时间范围选择面板是否展开
    open: PropTypes.bool,

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

    // 设置是否以只读模式进行渲染，底层利用Select的open参数
    readOnly: PropTypes.bool,

    // 设置展开面板底部额外内容
    extraFooter: PropTypes.node,

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    // 用于自定义需要纳入batchProps中的属性名数组
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    // 打包监听batchPropsNames中定义的属性值变化
    batchPropsValues: PropTypes.object,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

    /**
     * 是否需要确认按钮，为`false`时失去焦点即代表选择
     * 默认为`false`
     */
    needConfirm: PropTypes.bool,

    /**
    * Object that holds the loading state object coming from dash-renderer
    */
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
    setProps: PropTypes.func,

    /**
   * Used to allow user interactions in this component to be persisted when
   * the component - or the page - is refreshed. If `persisted` is truthy and
   * hasn't changed from its previous value, a `value` that the user has
   * changed while using the app will keep that change, as long as
   * the new `value` also matches what was given originally.
   * Used in conjunction with `persistence_type`.
   */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdTimeRangePicker.defaultProps = {
    disabled: [false, false],
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    use12Hours: false,
    allowClear: true,
    autoFocus: false,
    bordered: true,
    size: 'middle',
    format: 'HH:mm:ss',
    needConfirm: false,
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn',
    placement: 'bottomLeft',
    popupContainer: 'body',
    batchPropsNames: []
}

export default AntdTimeRangePicker;

export const propTypes = AntdTimeRangePicker.propTypes;
export const defaultProps = AntdTimeRangePicker.defaultProps;