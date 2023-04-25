# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdupload

"""
    'feffery'_antdupload(;kwargs...)

An AntdUpload component.

Keyword arguments:
- `id` (String; optional)
- `apiUrl` (String; optional)
- `buttonContent` (a list of or a singular dash component, string or number; optional)
- `className` (String | Dict; optional)
- `confirmBeforeDelete` (Bool; optional)
- `defaultFileList` (optional): . defaultFileList has the following type: Array of lists containing elements 'name', 'status', 'uid', 'url', 'taskId'.
Those elements have the following types:
  - `name` (String; optional)
  - `status` (a value equal to: 'done', 'error', 'removed'; optional)
  - `uid` (Bool | Real | String | Dict | Array; optional)
  - `url` (String; optional)
  - `taskId` (String; optional)s
- `directory` (Bool; optional)
- `disabled` (Bool; optional)
- `downloadUrl` (String; optional)
- `failedTooltipInfo` (String; optional)
- `fileListMaxLength` (Real; optional)
- `fileMaxSize` (Real; optional)
- `fileTypes` (Array of Strings; optional)
- `headers` (Dict; optional)
- `key` (String; optional)
- `lastUploadTaskRecord` (optional): . lastUploadTaskRecord has the following type: lists containing elements 'fileName', 'fileSize', 'completeTimestamp', 'taskStatus', 'taskId'.
Those elements have the following types:
  - `fileName` (String; optional)
  - `fileSize` (Real; optional)
  - `completeTimestamp` (Real; optional)
  - `taskStatus` (String; optional)
  - `taskId` (String; optional) | Array of lists containing elements 'fileName', 'fileSize', 'completeTimestamp', 'taskStatus', 'taskId'.
Those elements have the following types:
  - `fileName` (String; optional)
  - `fileSize` (Real; optional)
  - `completeTimestamp` (Real; optional)
  - `taskStatus` (String; optional)
  - `taskId` (String; optional)s
- `listUploadTaskRecord` (optional): . listUploadTaskRecord has the following type: Array of lists containing elements 'fileName', 'fileSize', 'completeTimestamp', 'taskStatus', 'taskId', 'uid', 'url'.
Those elements have the following types:
  - `fileName` (String; optional)
  - `fileSize` (Real; optional)
  - `completeTimestamp` (Real; optional)
  - `taskStatus` (String; optional)
  - `taskId` (String; optional)
  - `uid` (String; optional)
  - `url` (String; optional)s
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `multiple` (Bool; optional)
- `progressProps` (optional): . progressProps has the following type: lists containing elements 'strokeColor', 'strokeWidth', 'format'.
Those elements have the following types:
  - `strokeColor` (optional): . strokeColor has the following type: String | lists containing elements 'from', 'to'.
Those elements have the following types:
  - `from` (String; optional)
  - `to` (String; optional)
  - `strokeWidth` (Real; optional)
  - `format` (optional): . format has the following type: lists containing elements 'prefix', 'suffix'.
Those elements have the following types:
  - `prefix` (String; optional)
  - `suffix` (String; optional)
- `showErrorMessage` (Bool; optional)
- `showPercent` (Bool; optional)
- `showSuccessMessage` (Bool; optional)
- `showUploadList` (Bool; optional)
- `status` (a value equal to: 'error', 'warning'; optional)
- `style` (Dict; optional)
- `uploadId` (String; optional)
"""
function 'feffery'_antdupload(; kwargs...)
        available_props = Symbol[:id, :apiUrl, :buttonContent, :className, :confirmBeforeDelete, :defaultFileList, :directory, :disabled, :downloadUrl, :failedTooltipInfo, :fileListMaxLength, :fileMaxSize, :fileTypes, :headers, :key, :lastUploadTaskRecord, :listUploadTaskRecord, :loading_state, :locale, :multiple, :progressProps, :showErrorMessage, :showPercent, :showSuccessMessage, :showUploadList, :status, :style, :uploadId]
        wild_props = Symbol[]
        return Component("'feffery'_antdupload", "AntdUpload", "feffery_antd_components", available_props, wild_props; kwargs...)
end

