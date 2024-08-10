import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash'
import { HeadCell } from '../../utils/interfaces';

@Component({
  selector: 'app-invocie-table',
  standalone: true,
  imports: [],
  templateUrl: './invocie-table.component.html',
  styleUrl: './invocie-table.component.css'
})
export class InvocieTableComponent implements OnInit {
    @Input() headCells: HeadCell[] = [];
    @Input() rows: any[] = [];
    @Input() totalRows?: number;
    @Input() rowsPerPage: number = 5;
    @Input() totalPages?: number;
    @Input() isLoading: boolean = false;
    @Input() isError: boolean = false;
    @Input() errorMessage: string = '';
    
    @Output() setPageNumber = new EventEmitter<number>();
    @Output() onClickRow = new EventEmitter<any>();
    @Output() setValue = new EventEmitter<{ page: number, tableRowsPerPage: number }>();
    @Output() onTableRowsPerPageChange = new EventEmitter<number>();
  
    page: number = 0;
    tableRowsPerPage: number = this.rowsPerPage;

    rowList: any = (row: {}) => Object.values(row);

    ngOnInit(): void {
      this.setPageNumber.emit(this.page);
      this.setValue.emit({ page: this.page, tableRowsPerPage: this.tableRowsPerPage });
    }
  
    handleChangeRowsPerPage(value: number): void {
      this.tableRowsPerPage = value;
      this.onTableRowsPerPageChange.emit(value);
      this.page = 0;
    }
  
    handlePageChange(page: number): void {
      this.page = page;
      this.setPageNumber.emit(this.page);
    }
  
    rowsPerPageOptions = _.uniqBy(
      _.sortBy([
        { name: '5', value: 5 },
        { name: '10', value: 10 },
        { name: '25', value: 25 },
        { name: '100', value: 100 },
        { name: `${this.rowsPerPage}`, value: this.rowsPerPage }
      ], 'value'), 'name');
}
