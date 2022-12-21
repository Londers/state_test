import React from "react";
import {Arm} from "../common";
import {DataGrid, GridColDef, GridToolbarQuickFilter, ruRU} from "@mui/x-data-grid";
import {Button} from "@mui/material";

const columns: GridColDef[] = [
    {
        field: "arm",
        flex: 8,
        headerName: "Описание",
        headerAlign: "center"
    }, {
        field: "open",
        flex: 1,
        headerName: "Переход",
        filterable: false,
        sortable: false,
        minWidth: 100,
        headerAlign: "center",
        align: "center",
        renderCell: (params => {
            return (
                <Button variant="outlined" onClick={() =>
                    window.open(`${window.origin}/user/${localStorage.getItem('login')}/cross/control?Region=${params.row.region}&Area=${params.row.area}&ID=${params.row.armId}`)}
                >
                    Открыть
                </Button>
            )
        })
    },
    {field: "region", hide: true, hideable: false, filterable: false},
    {field: "area", hide: true, hideable: false, filterable: false},
    {field: "id", hide: true, hideable: false, filterable: false},
]

function ArmsTable(props: { arms: Arm[] }) {
    const rows = props.arms?.map((arm, index) => {
        return {
            id: index,
            arm: arm.description,
            region: arm.region,
            area: arm.area,
            armId: arm.ID,
        }
    }) ?? []

    return (
        <div style={{height: "90vh", width: "54%", margin: ".5% 23%"}}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                columns={columns}
                rows={rows}
                disableColumnMenu
                hideFooter
                checkboxSelection={false}
                components={{
                    Toolbar: () => <GridToolbarQuickFilter/>
                }}
            />
        </div>
    )
}

export default ArmsTable;