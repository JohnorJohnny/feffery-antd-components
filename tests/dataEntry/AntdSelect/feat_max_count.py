if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSelect(
            prefix='至多选择3个',
            options=[
                {'label': f'选项{i}', 'value': f'选项{i}'}
                for i in range(1, 26)
            ],
            maxCount=3,
            mode='multiple',
            style={'width': 350},
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)