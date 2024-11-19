/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { GPSPoint } from 'utils/calibration';
// import { ActionType } from './actions';
import { AreaUnitType } from 'utils/getAreaUnitConversion';

// The relates to the JS object Meter.types for the same use in src/server/models/Meter.js.
// They should be kept in sync.
export enum MeterType {
	EGAUGE = 'egauge',
	MAMAC = 'mamac',
	METASYS = 'metasys',
	OBVIUS = 'obvius',
	OTHER = 'other'
}

// This relates to TimeSortTypes in src/client/app/types/csvUploadForm.ts
// They should be kept in sync.
export enum MeterTimeSortType {
	increasing = 'increasing',
	decreasing = 'decreasing',
}

interface AdminMeterData {
	id: number;
	identifier: string;
	name: string;
	area: number;
	enabled: boolean;
	displayable: boolean;
	meterType: string;
	url: string;
	timeZone: string | null;
	gps: GPSPoint | null;
	unitId: number;
	defaultGraphicUnit: number;
	note: string;
	cumulative: boolean;
	cumulativeReset: boolean;
	cumulativeResetStart: string;
	cumulativeResetEnd: string;
	endOnlyTime: boolean;
	reading: number;
	readingGap: number;
	readingVariation: number;
	readingDuplication: number;
	timeSort: string;
	startTimestamp: string | undefined;
	endTimestamp: string | undefined;
	previousEnd: string | undefined;
	areaUnit: AreaUnitType;
	readingFrequency: string;
	minVal: number;
	maxVal: number;
	minDate: string;
	maxDate: string;
	maxError: number;
	disableChecks: boolean;
}
interface NonAdminMeterData {
	id: number,
	name: null,
	url: null,
	enabled: boolean,
	displayable: boolean,
	meterType: null,
	timeZone: null,
	gps: GPSPoint | null,
	identifier: string,
	note: null,
	area: number,
	cumulative: null,
	cumulativeReset: null,
	cumulativeResetStart: null,
	cumulativeResetEnd: null,
	readingGap: null,
	readingVariation: null,
	readingDuplication: null,
	timeSort: null,
	endOnlyTime: null,
	reading: null,
	startTimestamp: null,
	endTimestamp: null,
	previousEnd: null,
	unitId: number,
	defaultGraphicUnit: number,
	areaUnit: AreaUnitType,
	readingFrequency: null,
	minVal: null,
	maxVal: null,
	minDate: null,
	maxDate: null,
	maxError: null,
	disableChecks: null,
}
export type MeterData = AdminMeterData | NonAdminMeterData

export interface MeterDataByID extends Record<number, MeterData> { }

export interface MetersState {
	hasBeenFetchedOnce: boolean;
	isFetching: boolean;
	submitting: number[];
	byMeterID: MeterDataByID;
}
