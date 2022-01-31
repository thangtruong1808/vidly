import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
	state = {
		movies: getMovies(),
	};

	handleDelete = (movie) => {
		const movies_filtered = this.state.movies.filter(
			(m) => m._id !== movie._id
		);
		this.setState({ movies: movies_filtered });
	};
	getBadgeClasess() {
		let classes = "badge m-2 bg-";
		const { length: countMovies } = this.state.movies;
		classes += countMovies === 0 ? "success" : "info";
		return classes;
	}
	render() {
		const { length: countMovies } = this.state.movies;
		if (countMovies === 0) {
			return (
				<p className={this.getBadgeClasess()}>
					There are no movies in the database.
				</p>
			);
		}
		return (
			<div>
				<p className={this.getBadgeClasess()}>
					Showing {countMovies} movies in the databse
				</p>
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map((movie) => (
							<tr key={movie._id}>
								<td>{movie._id}</td>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td>
									<button
										onClick={() => this.handleDelete(movie)}
										className="btn btn-danger btn-sm"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Movies;
