# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class AntdRibbon(Component):
    """An AntdRibbon component.
缎带组件AntdRibbon

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，添加徽标的目标元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- color (string; optional):
    缎带颜色.

- placement (a value equal to: 'start', 'end'; default 'end'):
    缎带显示位置，可选项有`'start'`、`'end'`  默认值：`'end'`.

- text (a list of or a singular dash component, string or number; optional):
    组件型，缎带内容.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = ['text']
    _base_nodes = ['text', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdRibbon'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        color: typing.Optional[str] = None,
        placement: typing.Optional[Literal["start", "end"]] = None,
        text: typing.Optional[ComponentType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'color', 'placement', 'text', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'color', 'placement', 'text', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdRibbon, self).__init__(children=children, **args)

setattr(AntdRibbon, "__init__", _explicitize_args(AntdRibbon.__init__))
