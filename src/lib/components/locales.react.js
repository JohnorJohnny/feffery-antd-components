import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';
import deDE from 'antd/lib/locale/de_DE';

const str2Locale = new Map([
    ['zh-cn', zhCN],
    ['en-us', enUS],
    ['de-de', deDE]
])

const locale2text = {
    AntdSpoiler: {
        'zh-cn': {
            hideLabel: '收起',
            showLabel: '查看更多'
        },
        'en-us': {
            hideLabel: 'Hide',
            showLabel: 'Show more'
        },
        'de-de': {
            hideLabel: 'Verbergen',
            showLabel: 'Mehr anzeigen'
        }
    },
    AntdPictureUpload: {
        'zh-cn': {
            confirmBeforeDeleteTitle: '确认删除',
            confirmBeforeDeleteOkText: '确认',
            confirmBeforeDeleteCancelText: '取消'
        },
        'en-us': {
            confirmBeforeDeleteTitle: 'Confirm Delete',
            confirmBeforeDeleteOkText: 'Ok',
            confirmBeforeDeleteCancelText: 'Cancel'
        },
        'de-de': {
            confirmBeforeDeleteTitle: 'Löschen bestätigen',
            confirmBeforeDeleteOkText: 'Ok',
            confirmBeforeDeleteCancelText: 'Abbrechen'
        }
    },
    AntdPagination: {
        'zh-cn': {
            showTotalPrefix: '共 ',
            showTotalSuffix: ' 条记录'
        },
        'en-us': {
            showTotalPrefix: 'Total ',
            showTotalSuffix: ' items'
        },
        'de-de': {
            showTotalPrefix: 'Gesamt ',
            showTotalSuffix: ' items'
        }
    },
    AntdTable: {
        'zh-cn': {
            showTotalPrefix: '共 ',
            showTotalSuffix: ' 条记录',
            filterKeywordPlaceholder: '搜索',
            filterKeywordSearchButtonText: '搜索',
            filterKeywordResetButtonText: '重置',
        },
        'en-us': {
            showTotalPrefix: 'Total ',
            showTotalSuffix: ' items',
            filterKeywordPlaceholder: 'Search',
            filterKeywordSearchButtonText: 'Search',
            filterKeywordResetButtonText: 'Reset',
        },
        'de-de': {
            showTotalPrefix: 'Gesamt ',
            showTotalSuffix: ' items',
            filterKeywordPlaceholder: 'Suche',
            filterKeywordSearchButtonText: 'Suchen',
            filterKeywordResetButtonText: 'Zurücksetzen',
        }
    },
    AntdTransfer: {
        'zh-cn': {
            titles: ['待选区', '选定区']
        },
        'en-us': {
            titles: ['Source', 'Target']
        },
        'de-de': {
            titles: ['Quelle', 'Ziel']
        }
    },
    Upload: {
        'zh-cn': {
            uploadSuccess: '上传成功！',
            uploadFailed: '上传失败！',
            sizeError: ['文件大小超出', 'MB限制！'],
            typeError: ['上传失败，', '文件格式不符合要求！'],
            buttonContent: '点击上传文件'
        },
        'en-us': {
            uploadSuccess: 'upload success!',
            uploadFailed: 'upload failed!',
            sizeError: ['File size exceeds the ', 'MB limit!'],
            typeError: ['Uploading failed, The format of ', ' does not meet requirements!'],
            buttonContent: 'Click to upload file'
        },
        'de-de': {
            uploadSuccess: 'Hochladen erfolgreich!',
            uploadFailed: 'Hochladen fehlgeschlagen!',
            sizeError: ['Dateigröße überschreitet das Limit von ', 'MB!'],
            typeError: ['Hochladen fehlgeschlagen. Das Format von ', ' entspricht nicht den Anforderungen!'],
            buttonContent: 'Klicken, um eine Datei hochzuladen'
        }
    },
    AntdComment: {
        'zh-cn': {
            likeTooltipTitle: '支持',
            dislikeTooltipTitle: '反对',
            replayTitle: '添加回复',
            deleteConfirmTitle: '确认删除',
            deleteConfirmOkText: '确认',
            deleteConfirmCancelText: '取消',
            deleteTitle: '删除',
        },
        'en-us': {
            likeTooltipTitle: 'like',
            dislikeTooltipTitle: 'dislike',
            replayTitle: 'Add a reply',
            deleteConfirmTitle: 'Confirm deletion',
            deleteConfirmOkText: 'Yes',
            deleteConfirmCancelText: 'No',
            deleteTitle: 'Delete',
        },
        'de-de': {
            likeTooltipTitle: 'Gefällt mir',
            dislikeTooltipTitle: 'Gefällt mir nicht',
            replayTitle: 'Antwort hinzufügen',
            deleteConfirmTitle: 'Löschen bestätigen',
            deleteConfirmOkText: 'Ja',
            deleteConfirmCancelText: 'Nein',
            deleteTitle: 'Löschen',
        }
    }
}

export { str2Locale, locale2text };
