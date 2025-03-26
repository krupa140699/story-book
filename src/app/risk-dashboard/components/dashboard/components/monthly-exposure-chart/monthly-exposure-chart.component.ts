import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexDataLabels,
  ApexLegend,
  ApexTooltip,
  ApexPlotOptions,
  ApexFill
} from 'ng-apexcharts';
@Component({
  selector: 'app-monthly-exposure-chart',
  imports: [NgApexchartsModule,CommonModule],
  templateUrl: './monthly-exposure-chart.component.html',
  styleUrl: './monthly-exposure-chart.component.scss'
})
export class MonthlyExposureChartComponent implements OnInit,OnDestroy, AfterViewInit {
  chart: any;
  constructor() { }
  public chartSeries!: ApexAxisChartSeries;
  public chartOptions!: ApexChart;
  public xAxisOptions!: ApexXAxis;
  public yAxisOptions!: ApexYAxis;
  public strokeOptions!: ApexStroke;
  public dataLabelsOptions!: ApexDataLabels;
  public legendOptions!: ApexLegend;
  public tooltipOptions!: ApexTooltip;
  public plotOptions!: ApexPlotOptions;
  public fillOptions!: ApexFill;

  columnIndex: any = [];
  pageSize = 12;
  currentPage = 0;
  ngOnInit() {
    this.chartSeries = [
      {
        name: "Exposure-negative",
        type: "bar",
        group: "exposer",
        data: [0,0,50000,0,0,0,0,0,0,0,0,0]
      },
      {
        name: "Exposure",
        type: "bar",
        group: "exposer",
        data: [95000,95000,45000,95000,95000,95000,95000,95000,95000,95000,95000,95000]
      },
      {
        name: "Recommended hedging",
        type: "bar",
        group: "rechedge",
        data: [60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000]
      },
      {
        name: "Actual hedging",
        type: "bar",
        group: "acthedge",
        data: [1000,1000,1000,20000,1000,1000,1000,1000,1000,1000,1000,1000]
      }
    ];
  }
  ngAfterViewInit() {
    // Use setTimeout to allow Angular to render the chart correctly
    setTimeout(() => {
      this.getChartOptions();
    }, 100);
  }
  ngOnDestroy() {
    // Destroy the chart to prevent memory leaks
    if (this.chart) {
      this.chart.destroy();
    }
  }
  getChartOptions() {
    this.chartOptions = {
      type: "bar",
      height: 319,
      stacked: true,
      toolbar: {
        show: false
      },
    } as ApexChart;
  
    this.xAxisOptions = {
      categories: ['Jan 24','Feb 24','Mar 24','Apr 24','May 24','Jun 24','Jul 24','Aug 24','Sep 24','Oct 24','Nov 24','Dec 24'],
      labels: {
        style: {
          colors: '#98A2B3',
          fontSize: '12px',
          fontFamily: 'Inter'
        },
        rotate: -45,
        hideOverlappingLabels: false,
      },
    };
  
    this.yAxisOptions = {
      min: 0,
      max: 100000, // Round off the value
      tickAmount: 5,
      labels: {
        formatter: function(val) {
          return "$" + val;
        },
        style: {
          colors: 'rgba(0, 0, 0, 0.70)',
          fontSize: '12px',
          fontFamily: 'Inter'
        }
      }
    };
  
  
    this.strokeOptions = {
      width: 0,
      curve: "smooth"
    };
  
    this.dataLabelsOptions = {
      enabled: false
    };
  
    this.legendOptions = {
      show: true,
      position: "top",
      markers: {
        offsetX: 0,
        offsetY: 0,
        fillColors: ["#D92D20", "#DCEAF7", "#A2B0FB", "#2947F2"],
        strokeWidth: 2
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0
      }
    };
  
    this.tooltipOptions = {
      enabled: false, // Disable default tooltips
    };
  
    this.plotOptions = {
      bar: {
        horizontal: false,
        columnWidth: '35px',
      }
    };
  
    this.fillOptions = {
      colors: ["#D92D20", "#DCEAF7", "#A2B0FB", "#2947F2"],
    };
  }
}
