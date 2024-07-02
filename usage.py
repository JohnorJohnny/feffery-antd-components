import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdFlex(
            [
                fac.AntdButton('Button', type='primary')
                for i in range(24)
            ],
            gap='small',
            wrap=True,
        ),
        fac.AntdFlex(
            [
                fac.AntdButton('Button', type='primary')
                for i in range(24)
            ],
            gap='small',
        ),
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
