import { HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { doesNotThrow } from 'assert';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { Movie } from '../models/movie';
import { MovieService } from '../_services';

import { SelectMovieComponent } from './select-movie.component';

describe('SelectMovieComponent', () => {
  let component: SelectMovieComponent;
  let fixture: ComponentFixture<SelectMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectMovieComponent, BreadcrumbComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe("boundary", () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });
  });
  describe("functional", () => {
    it('should fetch all movies', async () => {
      expect(component).toBeTruthy();

      await component.fetchAllMovies();
      expect(component.movies).toBeDefined();
      expect(component.movies.length).toBeGreaterThan(0);
      expect(component.movies[0].id).toBeGreaterThan(0);
    });

  });
});
