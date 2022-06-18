import { Component, OnInit } from '@angular/core';
import Pin from '../../@entities/Pin';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.page.html',
  styleUrls: ['./pins.page.scss'],
})
export class PinsPage implements OnInit {
  pins: Pin[];

  constructor() { }

  ngOnInit() {
    this.createPins();
  }

  createPins() {
    this.pins = [
      {
        id: 1,
        // eslint-disable-next-line max-len
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e56605d-fd1b-4ef1-8cc2-e222421d4538/dedbyyw-ff7564ae-08d4-4b5e-be06-91852714ba4b.png/v1/fill/w_1280,h_1411,strp/mushroom_icon_by_eudai_dedbyyw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQxMSIsInBhdGgiOiJcL2ZcLzVlNTY2MDVkLWZkMWItNGVmMS04Y2MyLWUyMjI0MjFkNDUzOFwvZGVkYnl5dy1mZjc1NjRhZS0wOGQ0LTRiNWUtYmUwNi05MTg1MjcxNGJhNGIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XY6FpCeTnDY0oLFL6ffqhufH6ifS7AzFYiEYp6JK0-c',
        title: 'Champignon',
      },
      {
        id: 2,
        image: 'https://findicons.com/files/icons/3/agriculture/256/cow.png',
        title: 'Vache',
      }
    ];
  }
}
