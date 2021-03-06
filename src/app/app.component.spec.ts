import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

// import * as fs from "fs";

// let writeTestResult = require("./../../test/write-test-results")

describe("AppComponent", () => {

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent, HeaderComponent, FooterComponent]
      }).compileComponents();
    }));

    describe("boundary", ()=>{

      it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
    });
    
  })