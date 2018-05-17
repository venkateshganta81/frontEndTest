import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';



@Component({
    selector: 'rocker-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {



    public analyticsData: any = [
        { "zoneId": "Calle 85", "data": { "count": 1, "speed": 10, "time": 1466781876681 } },
        { "zoneId": "Salitre plaza", "data": { "count": 2, "speed": 8.5, "time": 1466781876681 } },
        { "zoneId": "Parque 93", "data": { "count": 4, "speed": 15, "time": 1466781876681 } },
        { "zoneId": "Calle 80", "data": { "count": 3, "speed": 13.5, "time": 1466781876681 } },
        { "zoneId": "Centro", "data": { "count": 1, "speed": 9, "time": 1466781876681 } }
    ];
    public sub;
    public lineChartData: Array<any> = [];
    public lineChartLabels: Array<any> = [];
    public lineChartOptions: any = {
        scaleShowVerticalLines: true,
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false
                }
            }]
        }
    };
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        maintainAspectRatio: true,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false
                }
            }]
        }
    };
    public lineChartColors: Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: '#fab13e',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#fab13e',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#fab13e'
        },
        {
            backgroundColor: 'transparent',
            borderColor: '#7fd20d',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#7fd20d',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#7fd20d'
        },
        {
            backgroundColor: 'transparent',
            borderColor: '#5c9df5',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#5c9df5',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#5c9df5'
        },
        {
            backgroundColor: 'transparent',
            borderColor: '#da6fe7',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#da6fe7',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#da6fe7'
        },
        {
            backgroundColor: 'transparent',
            borderColor: '#ef0000',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#ef0000',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#ef0000'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    public doughnutChartLabels: any = [];
    public doughnutChartData: number[] = [];
    public doughnutChartType: string = 'doughnut';

    public barChartLabels: any = [];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;
    public barChartColor : any = [
        {backgroundColor: 'rgba(91, 157, 245, 0.71)'}
    ]

    public barChartData: any[] = [];



    ngOnInit() {
        this.drawLineChart();
    }

    drawLineChart() {
        this.analyticsData.forEach((zone) => {
            this.lineChartData.push({
                data: [zone.data.speed],
                label: zone.zoneId
            })
            this.lineChartLabels.push(
                new Date(zone.data.time).getMinutes()
            )
            this.doughnutChartData.push(
                zone.data.speed
            )
            this.doughnutChartLabels.push(
                zone.zoneId
            )
            this.barChartData.push({
                data: [zone.data.count],
                label: zone.zoneId
            })
            this.barChartLabels.push(
                new Date(zone.data.time).getMinutes()
            )
        });
        this.sub = Observable.interval(1000*60)
                            .subscribe(() => { this.randomizeData(); })
    }




    randomizeData() {
        this.lineChartData=[];
        this.lineChartLabels=[];
        this.doughnutChartData=[];
        this.doughnutChartLabels=[];
        this.barChartData=[];
        this.barChartLabels=[];
                this.analyticsData.forEach((zone) => {
                    this.lineChartData.push({
                        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
                        label: zone.zoneId
                    })
                    this.lineChartLabels.push(
                        (new Date()).getMinutes()
                    )
                    this.doughnutChartData.push(
                        zone.data.speed
                    )
                    this.doughnutChartLabels.push(
                        zone.zoneId
                    )
                    this.barChartData.push({
                        data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
                        label: zone.zoneId
                    })
                    this.barChartLabels.push(
                        (new Date()).getMinutes()
                    )
                });
    }

}
