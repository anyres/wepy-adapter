import {
  Anyres,
  IAnyresRequestOptions,
  IAnyresResponse,
  IHttpAdapter,
} from "@anyres/core";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import wepy from "wepy";

export interface IWepyResponse {
  data: {
    [key: string]: any;
  };
  statusCode: number;
  header: {
    [key: string]: any;
  };
}

export class WepyAdapter implements IHttpAdapter {

  public get(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    if (!options) {
      options = {
        headers: {},
        params: {},
      };
    }
    return Observable.fromPromise<IWepyResponse>(wepy.request({
      url,
      data: options.params,
      header: options.headers,
      method: "GET",
      dataType: "json",
    }))
      .map((response) => {
        return {
          status: response.statusCode,
          headers: response.header,
          body: response.data,
          json: () => response.data,
        };
      });
  }

  public post(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    if (!options) {
      options = {
        headers: {},
        params: {},
      };
    }
    return Observable.fromPromise<IWepyResponse>(wepy.request({
      url,
      data: options.body,
      header: options.headers,
      method: "POST",
      dataType: "json",
    }))
      .map((response) => {
        return {
          status: response.statusCode,
          headers: response.header,
          body: response.data,
          json: () => response.data,
        };
      });
  }

  public put(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    if (!options) {
      options = {
        headers: {},
        params: {},
      };
    }
    return Observable.fromPromise<IWepyResponse>(wepy.request({
      url,
      data: options.body,
      header: options.headers,
      method: "PUT",
      dataType: "json",
    }))
      .map((response) => {
        return {
          status: response.statusCode,
          headers: response.header,
          body: response.data,
          json: () => response.data,
        };
      });
  }

  public delete(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    if (!options) {
      options = {
        headers: {},
        params: {},
      };
    }
    return Observable.fromPromise<IWepyResponse>(wepy.request({
      url,
      header: options.headers,
      method: "DELETE",
      dataType: "json",
    }))
      .map((response) => {
        return {
          status: response.statusCode,
          headers: response.header,
          body: response.data,
          json: () => response.data,
        };
      });
  }

  public patch(url: string, options?: IAnyresRequestOptions): Observable<IAnyresResponse> {
    if (!options) {
      options = {
        headers: {},
        params: {},
      };
    }
    return Observable.fromPromise<IWepyResponse>(wepy.request({
      url,
      data: options.body,
      header: options.headers,
      method: "PUT",
      dataType: "json",
    }))
      .map((response) => {
        return {
          status: response.statusCode,
          headers: response.header,
          body: response.data,
          json: () => response.data,
        };
      });
  }

}

