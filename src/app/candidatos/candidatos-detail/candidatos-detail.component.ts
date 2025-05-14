import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatosDetail } from '../candidato-detail';
import { CandidatoService } from '../candidato.service';

@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {
  candidatoid! : string;
  @Input() CandidatosDetail!: CandidatosDetail;

  constructor(
    private route: ActivatedRoute,
    private candidatoService: CandidatoService
  ) {}

  getPapa(){
    this.candidatoService.getPapa(this.candidatoid).subscribe(apiData=>{
      this.CandidatosDetail = apiData;
    })
  }
  

  ngOnInit() {
    if(this.CandidatosDetail === undefined){
      this.candidatoid = this.route.snapshot.paramMap.get('id')!
      if (this.candidatoid) {
        this.getPapa();
      }
    }
  }
}
