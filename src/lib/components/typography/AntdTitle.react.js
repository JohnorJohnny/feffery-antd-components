import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Typography, ConfigProvider } from 'antd';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { str2Locale } from '../locales.react';
import { parseChildrenToArray } from '../utils';
import PropsContext from '../../contexts/PropsContext';

const { Title } = Typography;

// 定义标题组件AntdTitle，api参数参考https://ant.design/components/typography-cn/
const AntdTitle = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        locale,
        level,
        code,
        copyable,
        strikethrough,
        disabled,
        mark,
        strong,
        italic,
        underline,
        type,
        keyboard,
        setProps,
        loading_state
    } = props;

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    children = parseChildrenToArray(children)

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Title id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                level={level}
                code={code}
                copyable={copyable}
                delete={strikethrough}
                disabled={disabled}
                mark={mark}
                strong={strong}
                italic={italic}
                underline={underline}
                type={type}
                keyboard={keyboard}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Title>
        </ConfigProvider>
    );
}

// 定义参数或属性
AntdTitle.propTypes = {
    // 组件id
    /**
     * Component id.
     */
    id: PropTypes.string,

    /**
     * The content of the title.
     */
    children: PropTypes.node,

    // css类名
    /**
     * CSS class name.
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    /**
     * Custom CSS styles.
     */
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    /**
     * A unique identifier key used for refreshing assistance.
     */
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    /**
     * Sets the language environment. Possible options are 'zh-cn' and 'en-us'.
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置标题级别，可选的有1到5之间的整数，对应h1到h5
    // 默认为1
    /**
     * Sets the level of the title. Possible values are integers between 1 and 5, corresponding to h1 to h5.
     * Default is 1.
     */
    level: PropTypes.number,

    // 设置是否以code模式渲染内容
    /**
     * Sets whether to render the content in code mode.
     */
    code: PropTypes.bool,

    // 设置内容是否可快速复制
    /**
     * Sets whether the content can be quickly copied.
     */
    copyable: PropTypes.bool,

    // 设置是否以删除线模式渲染内容
    /**
     * Sets whether to render the content with strikethrough mode.
     */
    strikethrough: PropTypes.bool,

    // 设置是否以禁用模式渲染内容
    /**
     * Sets whether the content is disabled.
     */
    disabled: PropTypes.bool,

    // 设置是否添加标记样式
    /**
     * Sets whether to add mark style.
     */
    mark: PropTypes.bool,

    // 设置是否加粗
    /**
     * Sets whether the content should be bold.
     */
    strong: PropTypes.bool,

    // 设置是否斜体
    /**
     * Sets whether the content should be italic.
     */
    italic: PropTypes.bool,

    // 设置是否添加下划线
    /**
     * Sets whether to add underline.
     */
    underline: PropTypes.bool,

    // 设置是否添加键盘按键样式
    /**
     * Sets whether to add keyboard key style.
     */
    keyboard: PropTypes.bool,

    // 设置文本状态类型渲染，可用的有'secondary'、'success'、'warning'和'danger'，默认无状态
    /**
     * Sets the text status type for rendering. Possible options are 'secondary', 'success', 'warning', and 'danger'. Default is no status.
     */
    type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),

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
AntdTitle.defaultProps = {
    locale: 'zh-cn',
    level: 1
}

export default AntdTitle;